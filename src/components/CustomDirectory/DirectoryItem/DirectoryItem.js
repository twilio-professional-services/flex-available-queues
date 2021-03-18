import * as React from 'react';
import { IconButton, UserCard, templates, withTheme } from '@twilio/flex-ui';
import {
  ButtonContainer,
  CallButton,
  ItemInnerContainer,
} from '../CustomDirectoryComponents';
import { WorkerMarginPlaceholder } from './DirectoryItemComponents';

class DirectoryItem extends React.Component {
  onWarmTransferClick = (e) => {
    this.props.onTransferClick(this.props.item, { mode: 'WARM' });
  };

  onColdTransferClick = (e) => {
    this.props.onTransferClick(this.props.item, { mode: 'COLD' });
  };

  render() {
    console.debug('🍕🍕🍕🍕', this.props);
    return (
      <ItemInnerContainer
        className="Twilio-WorkerDirectory-QueueAvatar"
        noGrow
        noShrink
      >
        <WorkerMarginPlaceholder noGrow noShrink />
        <UserCard
          className="Twilio-Icon Twilio-Icon-Queue"
          firstLine={this.props.item.label}
          large
        />
        <ButtonContainer className="Twilio-WorkerDirectory-ButtonContainer">
          <CallButton
            icon="Call"
            onClick={this.onWarmTransferClick}
            themeOverride={this.props.theme.WorkerDirectory.ItemActionButton}
            title={templates.WarmTransferTooltip()}
          />
          <IconButton
            icon="Transfer"
            onClick={this.onColdTransferClick}
            themeOverride={this.props.theme.WorkerDirectory.ItemActionButton}
            title={templates.ColdTransferTooltip()}
          />
        </ButtonContainer>
      </ItemInnerContainer>
    );
  }
}

export default withTheme(DirectoryItem);
