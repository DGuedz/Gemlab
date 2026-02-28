import { AWSKMS } from "./backend/services/kms/AWSKMS";

try {
  const kms = new AWSKMS();
  console.log("AWSKMS instantiated successfully");
} catch (e) {
  console.error("Failed to instantiate AWSKMS", e);
  process.exit(1);
}
