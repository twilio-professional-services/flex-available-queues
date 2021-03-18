import { Actions, Manager } from '@twilio/flex-ui';
import FlexState from '../states/FlexState';

import { Actions as AvailableQueueActions } from '../states/AvailableQueuesListState';

const manager = Manager.getInstance();

Actions.addListener('beforeShowDirectory', async (payload) => {
  const { task } = payload;
  console.debug('TASK SID', task);
  const state = Manager.getInstance().store.getState();
  const { availableQueues } = state;
  // Query for list of queues
  const queueQuery = await manager.insightsClient.map({
    id: 'realtime_statistics_v1',
    mode: 'open_existing',
  });

  // Return list of queues
  const queues = await queueQuery.getItems();

  // List queue name/SID with eligible agents
  const list = queues.items
    .map((queue) => {
      const {
        sid,
        friendly_name,
        total_eligible_workers: eligibleWorkers,
        total_available_workers: availableWorkers,
      } = queue.value;

      return availableWorkers > 0
        ? { label: friendly_name, value: sid, task: task }
        : null;
    })
    .filter((elem) => elem);

  const queuesList = [] && list;

  console.debug('ACTION QUEUES LIST: ', queuesList);

  const newPayload = AvailableQueueActions.updateAvailableQueues(queuesList);
  FlexState.dispatchStoreAction(newPayload);
});
