import { IKMS } from "./IKMS";
import { LocalKMS } from "./LocalKMS";
import { AWSKMS } from "./AWSKMS";

export class KMSFactory {
  private static instance: IKMS;

  public static getKMS(): IKMS {
    if (!this.instance) {
      const type = process.env.KMS_PROVIDER || 'local';
      
      switch (type.toLowerCase()) {
        case 'aws':
          this.instance = new AWSKMS();
          break;
        case 'local':
        default:
          this.instance = new LocalKMS();
      }
    }
    return this.instance;
  }
}
