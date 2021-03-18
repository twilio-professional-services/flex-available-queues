import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions as AvailableQueuesActions } from '../../states/AvailableQueuesListState';

class AvailableQueuesList extends React.PureComponent {
  render() {
    console.debug(this.props);
    const { queuesList: queues } = this.props;
    console.debug('🐼🐼🐼COMPONENT LIST🐼🐼🐼: ', queues);
    if (!queues) {
      return <div />;
    }
    return queues.map((item) => {
      return (
        <AvailableQueuesList
          key={item.value}
          label={item.label}
          value={item.value}
          //onTransferClick={this.onTransferClick.bind(this)}
        />
      );
    });
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailableQueuesList);
