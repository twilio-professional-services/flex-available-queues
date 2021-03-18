import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FlexState from '../../states/FlexState';

import { Actions as AvailableQueuesActions } from '../../states/AvailableQueuesListState';

import { templates, withTaskContext } from '@twilio/flex-ui';

import DirectoryItem from './DirectoryItem';
import {
  TabContainer,
  InputContainer,
  StyledInput,
  ItemContainer,
} from './CustomDirectoryComponents';

class CustomDirectory extends React.Component {
  /**
   * Listener function for Transfer Button clicks. Handles both warm and cold
   * transfers via the `options` parameter. For more, see:
   * https://www.twilio.com/docs/flex/ui/actions#agent
   * https://twilio.github.io/twilio-taskrouter.js/Task.html#.TransferOptions
   *
   * @param {object} queue - The queue object to transfer to
   * @param {object} options - A dictionary object send to the "TransferTask" Action as defined by the TaskRouter SDK
   */
  onTransferClick(queue, options) {
    // console.debug('Transfer clicked');
    // console.debug('Transfer queue:', queue);
    // console.debug('Transfer options:', options);

    this.props.invokeTransfer({
      task: queue.task,
      targetSid: queue.value,
      options: options,
    });
  }

  /**
   * Render function
   */
  render() {
    return (
      <TabContainer key="custom-directory-container">
        <ItemContainer
          key="custom-directory-item-container"
          className="Twilio-WorkerDirectory-Queue"
          vertical
        >
          {this.props.queuesList.map((item) => {
            return (
              <DirectoryItem
                item={item}
                key={item.label}
                onTransferClick={this.onTransferClick.bind(this)}
              />
            );
          })}
        </ItemContainer>
      </TabContainer>
    );
  }
}
const mapStateToProps = (state) => {
  const queuesList = state.availableQueues.list.queuesList;

  return {
    queuesList: Array.isArray(queuesList) ? queuesList : [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateAvailableQueuesList: bindActionCreators(
      AvailableQueuesActions.updateAvailableQueues,
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDirectory);
