import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import availableQueuesReducers, {
  namespace as availableQueuesNamespace,
} from './states/AvailableQueuesListState';
import './listeners';
//import AvailableQueuesList from './components/AvailableQueuesList';
import CustomDirectory from './components/CustomDirectory';

const PLUGIN_NAME = 'TaskQueueAgentAvailabilityPlugin';

export default class TaskQueueAgentAvailabilityPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);
    // Remove Queues tab
    flex.WorkerDirectory.Tabs.Content.remove('queues');
    // Add new Queues tab
    flex.WorkerDirectory.Tabs.Content.add(
      <flex.Tab key="custom-directory" label="Queues">
        <CustomDirectory
          invokeTransfer={(params) => {
            flex.Actions.invokeAction('TransferTask', params);
            flex.Actions.invokeAction('HideDirectory');
          }}
        />
      </flex.Tab>
    );
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(
        `You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`
      );
      return;
    }

    manager.store.addReducer(availableQueuesNamespace, availableQueuesReducers);
  }
}
