// Copyright 2017-2020 @polkadot/ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0


declare module '@ledgerhq/hw-transport-node-hid-noevents' {
  import Transport from '@ledgerhq/hw-transport';

  export default class TransportNodeHidNoEvents extends Transport<string> {}
  export function getDevices(): Array<unknown>
}

declare module '@ledgerhq/hw-transport-node-hid-singleton' {
  import TransportNodeHidNoEvents, { getDevices } from '@ledgerhq/hw-transport-node-hid-noevents';

  export default class TransportNodeHid extends TransportNodeHidNoEvents { }
}
