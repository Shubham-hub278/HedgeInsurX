// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {GenesisUtils} from "@iden3/contracts/lib/GenesisUtils.sol";
import {ICircuitValidator} from "@iden3/contracts/interfaces/ICircuitValidator.sol";
import {ZKPVerifier} from "@iden3/contracts/verifiers/ZKPVerifier.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC4626.sol";
import "./RiskPool.sol";

//fetch amount and policy id
contract InsuranceClaimVerifier is ZKPVerifier {

    // Asset used by the pool to provide claims.
    ERC20 public immutable asset;

    //Liquidity vault contract
    ERC4626 public immutable liquidityVault;

    //Risk pool contract
    address public riskPoolContract;

    uint64 public constant TRANSFER_REQUEST_ID = 1;
    mapping(uint256 => address) public idToAddress;
    mapping(address => uint256) public addressToId;
    mapping(address => bool) public insuranceClaimed;

    constructor(ERC20 _asset, ERC4626 _vault, address _riskPool) {
        asset = _asset;
        liquidityVault = _vault;
        riskPoolContract = _riskPool;
    }

    function _beforeProofSubmit(
        uint64, /* requestId */
        uint256[] memory inputs,
        ICircuitValidator validator
    ) internal view override {
        // check that  challenge input is address of sender
        address addr = GenesisUtils.int256ToAddress(
            inputs[validator.getChallengeInputIndex()]
        );
        // this is linking between msg.sender and
        require(
            _msgSender() == addr,
            "address in proof is not a sender address"
        );
    }

    function _afterProofSubmit(
        uint64 requestId,
        uint256[] memory inputs,
        ICircuitValidator validator
    ) internal override {
        require(
            requestId == TRANSFER_REQUEST_ID && addressToId[_msgSender()] == 0,
            "proof can not be submitted more than once"
        );

        // get user id
        uint256 id = inputs[1];
        // additional check didn't get airdrop tokens before
        if (idToAddress[id] == address(0) && addressToId[_msgSender()] == 0 ) {
            insuranceClaimed[_msgSender()] = true;
            addressToId[_msgSender()] = id;
            idToAddress[id] = _msgSender();
            SafeERC20.safeTransferFrom(asset, address(liquidityVault), msg.sender, 1000);
            RiskPool(riskPoolContract).updateClaimRequest(_msgSender(),0);
        }

    }

    // function _beforeTokenTransfer(
    //     address, /* from */
    //     address to,
    //     uint256 /* amount */
    // ) internal view override {
    //     require(
    //         proofs[to][TRANSFER_REQUEST_ID] == true,
    //         "only identities who provided proof are allowed to receive tokens"
    //     );
    // }
}
