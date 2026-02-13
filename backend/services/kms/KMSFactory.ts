import { IKMS } from "./IKMS";
import { LocalKMS } from "./LocalKMS";

export class KMSFactory {
  private static instance: IKMS;

  public static getKMS(): IKMS {
    if (!this.instance) {
      // In the future, we can switch implementations based on NODE_ENV
      // e.g., if (process.env.NODE_ENV === 'production') return new AWSKMS();
      this.instance = new LocalKMS();
    }
    return this.instance;
  }
}
