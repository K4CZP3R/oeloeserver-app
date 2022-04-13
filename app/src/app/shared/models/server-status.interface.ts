export interface ServerStatus {
  favicon?: string;
  motd: {
    clean: string;
    html: string;
    raw: string;
  };
  players: {
    online: number;
    max: number;
    sample?: any;
  };
  roundTripLatency: number;
  version: {
    name: string;
    protocol: number;
  };
}
