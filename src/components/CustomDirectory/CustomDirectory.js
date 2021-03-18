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
  state = {
    searchTerm: '',
  };

  /**
   * Returns a list of workers from this component's State, filtered through
   * the entered search term and the `skipWorkerIf` funciton from props
   */
  filteredDirectory() {
    if (!this.state.directoryEntries) {
      return [];
    }
    const { searchTerm } = this.state;
    return this.state.directoryEntries
      .filter((worker) => {
        if (this.props.skipWorkerIf && this.props.skipWorkerIf(worker)) {
          return false;
        }
        if (!searchTerm) {
          return true;
        }
        return worker.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .sort((a, b) => {
        let a_name = a.attributes.full_name || a.attributes.friendlyName;
        let b_name = b.attributes.full_name || b.attributes.friendlyName;
        return a_name > b_name ? 1 : -1;
      });
  }

  /**
   * Listener function for changes in the Search field. Updates this component's
   * State with the input search term
   *
   * @param {Event} e - the change event
   */
  onSearchInputChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

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
    console.debug('Transfer clicked');
    console.debug('Transfer queue:', queue);
    console.debug('Transfer options:', options);

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
    console.debug(this.props.task);
    console.debug(this.props);

    return (
      <TabContainer key="custom-directory-container">
        <InputContainer key="custom-directory-input-container">
          <StyledInput
            key="custom-directory-input-field"
            onChange={this.onSearchInputChange}
            placeholder={templates.WorkerDirectorySearchPlaceholder()}
          />
        </InputContainer>
        <ItemContainer
          key="custom-directory-item-container"
          className="Twilio-WorkerDirectory-Queue"
          vertical
        >
          {this.props.queuesList.map((item) => {
            console.debug(item);
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
