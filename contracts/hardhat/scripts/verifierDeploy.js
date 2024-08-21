const {ethers} = require("hardhat");

const Operators = {
  NOOP : 0, // No operation, skip query verification in circuit
  EQ : 1, // equal
  LT : 2, // less than
  GT : 3, // greater than
  IN : 4, // in
  NIN : 5, // not in
  NE : 6   // not equal
}

const LIQUIDITY_VAULT = "0x9999f7fea5938fd3b1e26a12c3f2fb024e194f97";
const ASSET_ADDRESSS = "0x9999f7fea5938fd3b1e26a12c3f2fb024e194f97";
const RISK_POOL = "0x9999f7fea5938fd3b1e26a12c3f2fb024e194f97";

async function main() {

// you can run https://go.dev/play/p/rnrRbxXTRY6 to get schema hash and claimPathKey using YOUR schema
  const schemaBigInt = "323349859480856221443427894441992667842"

  // merklized path to field in the W3C credential according to JSONLD  schema e.g. birthday in the KYCAgeCredential under the url "https://raw.githubusercontent.com/iden3/claim-schema-vocab/main/schemas/json-ld/kyc-v3.json-ld"
  const schemaClaimPathKey = "16346625018666499236962389756665927708147999623498413210108726247310719140462"

  const contractName ="InsuranceClaimVerifier"
 
  const InsuranceClaimVerifierFactory = await ethers.getContractFactory(contractName,{
    libraries: {
      PoseidonFacade: "0xD65f5Fc521C4296723c6Eb16723A8171dCC12FB0",
    },
  } );
  
  const insuranceClaimInstance = await InsuranceClaimVerifierFactory.deploy(ASSET_ADDRESSS,
    LIQUIDITY_VAULT,RISK_POOL);

  await insuranceClaimInstance.waitForDeployment();
  console.log("Contract Address: ", insuranceClaimInstance.getAddress());

  // set default query
  //const circuitId = "credentialAtomicQuerySigV2OnChain"; //"credentialAtomicQuerySigV2OnChain";

  // mtp:validator: 0x3DcAe4c8d94359D31e4C89D7F2b944859408C618   // current mtp validator address on mumbai
  // sig:validator: 0xF2D4Eeb4d455fb673104902282Ce68B9ce4Ac450   // current sig validator address on mumbai

  const validatorAddress = "0xF2D4Eeb4d455fb673104902282Ce68B9ce4Ac450";

  const query = {
    requestId: 1,
    schema: schemaBigInt,
    claimPathKey  : schemaClaimPathKey,
    operator: Operators.EQ, // operator
    value: [1, ...new Array(63).fill(0).map(i => 0)], // for operators 1-3 only first value matters
  };

  const requestId = await insuranceClaimInstance.TRANSFER_REQUEST_ID();
  try {
    let tx = await insuranceClaimInstance.setZKPRequest(
        requestId,
        validatorAddress,
        query.schema,
        query.claimPathKey,
        query.operator,
        query.value,
    );
    console.log(tx.hash);
  } catch (e) {
    console.log("error: ", e);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });