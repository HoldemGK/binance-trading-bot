/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
class SettingIconBotOptionsAutoTriggerBuy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      botOptions: {}
    };
  }

  componentDidUpdate(nextProps) {
    // Only update configuration, when the modal is closed and different.
    if (
      _.isEmpty(nextProps.botOptions) === false &&
      _.isEqual(nextProps.botOptions, this.state.botOptions) === false
    ) {
      const { botOptions } = nextProps;

      this.setState({
        botOptions
      });
    }
  }

  render() {
    const { botOptions } = this.state;

    if (_.isEmpty(botOptions)) {
      return '';
    }

    return (
      <Accordion defaultActiveKey='0'>
        <Card className='mt-1'>
          <Card.Header className='px-2 py-1'>
            <Accordion.Toggle
              as={Button}
              variant='link'
              eventKey='0'
              className='p-0 fs-7 text-uppercase'>
              Auto Trigger Buy
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body className='px-2 py-1'>
              <div className='row'>
                <div className='col-12'>
                  <Form.Group
                    controlId='field-bot-options-auto-trigger-buy-enabled'
                    className='mb-2'>
                    <Form.Check size='sm'>
                      <Form.Check.Input
                        type='checkbox'
                        data-state-key='autoTriggerBuy.enabled'
                        checked={botOptions.autoTriggerBuy.enabled}
                        onChange={this.props.handleInputChange}
                      />
                      <Form.Check.Label>
                        Enabled{' '}
                        <OverlayTrigger
                          trigger='click'
                          key='bot-options-auto-trigger-buy-enabled-overlay'
                          placement='bottom'
                          overlay={
                            <Popover id='bot-options-auto-trigger-buy-enabled-overlay-right'>
                              <Popover.Content>
                                If enabled, the bot will trigger 1st grid trade
                                for buying after removing the last buy price due
                                to completed grid trades for selling. Note that
                                this action may be triggered if you sell the
                                coin in Binance directly and the last buy price
                                was recorded.
                              </Popover.Content>
                            </Popover>
                          }>
                          <Button
                            variant='link'
                            className='p-0 m-0 ml-1 text-info'>
                            <i className='fas fa-question-circle fa-sm'></i>
                          </Button>
                        </OverlayTrigger>
                      </Form.Check.Label>
                    </Form.Check>
                  </Form.Group>
                </div>
                <div className='col-12'>
                  <div className='row'>
                    <div className='col-12 col-sm-6'>
                      <Form.Group
                        controlId='field-bot-options-auto-trigger-buy-trigger-after'
                        className='mb-2'>
                        <Form.Label className='mb-0'>
                          Trigger after
                          <OverlayTrigger
                            trigger='click'
                            key='limit-overlay'
                            placement='bottom'
                            overlay={
                              <Popover id='limit-overlay-right'>
                                <Popover.Content>
                                  Set the minutes to wait for triggering the
                                  grid trade for buying. Once the time passes
                                  the configured minutes, the bot will trigger
                                  the grid trade for buying.
                                </Popover.Content>
                              </Popover>
                            }>
                            <Button
                              variant='link'
                              className='p-0 m-0 ml-1 text-info'>
                              <i className='fas fa-question-circle fa-sm'></i>
                            </Button>
                          </OverlayTrigger>
                        </Form.Label>
                        <Form.Control
                          size='sm'
                          type='number'
                          placeholder='Enter minutes'
                          required
                          min='0.1'
                          step='0.1'
                          data-state-key='autoTriggerBuy.triggerAfter'
                          value={botOptions.autoTriggerBuy.triggerAfter}
                          onChange={this.props.handleInputChange}
                        />
                      </Form.Group>
                    </div>
                  </div>
                </div>

                <div className='col-12'>
                  <strong>Conditions</strong>
                </div>
                <div className='col-12 col-md-6'>
                  <Form.Group
                    controlId='field-bot-options-auto-trigger-buy-condition-when-less-than-ath-restriction'
                    className='mb-2'>
                    <Form.Check size='sm'>
                      <Form.Check.Input
                        type='checkbox'
                        data-state-key='autoTriggerBuy.conditions.whenLessThanATHRestriction'
                        checked={
                          botOptions.autoTriggerBuy.conditions
                            .whenLessThanATHRestriction
                        }
                        onChange={this.props.handleInputChange}
                      />
                      <Form.Check.Label>
                        Re-schedule when the current price is over ATH
                        restriction{' '}
                        <OverlayTrigger
                          trigger='click'
                          key='bot-options-auto-trigger-buy-conditions-when-less-than-ath-restriction-overlay'
                          placement='bottom'
                          overlay={
                            <Popover id='bot-options-auto-trigger-buy-conditions-when-less-than-ath-restriction-overlay-right'>
                              <Popover.Content>
                                If enabled, the bot will re-schedule the
                                auto-buy trigger action if the price is over the
                                ATH restriction.
                              </Popover.Content>
                            </Popover>
                          }>
                          <Button
                            variant='link'
                            className='p-0 m-0 ml-1 text-info'>
                            <i className='fas fa-question-circle fa-sm'></i>
                          </Button>
                        </OverlayTrigger>
                      </Form.Check.Label>
                    </Form.Check>
                  </Form.Group>
                </div>
                <div className='col-12 col-md-6'>
                  <Form.Group
                    controlId='field-bot-options-auto-trigger-buy-condition-after-disabled-period'
                    className='mb-2'>
                    <Form.Check size='sm'>
                      <Form.Check.Input
                        type='checkbox'
                        data-state-key='autoTriggerBuy.conditions.afterDisabledPeriod'
                        checked={
                          botOptions.autoTriggerBuy.conditions
                            .afterDisabledPeriod
                        }
                        onChange={this.props.handleInputChange}
                      />
                      <Form.Check.Label>
                        Re-schedule when the action is disabled{' '}
                        <OverlayTrigger
                          trigger='click'
                          key='bot-options-auto-trigger-buy-conditions-after-disabled-period-overlay'
                          placement='bottom'
                          overlay={
                            <Popover id='bot-options-auto-trigger-buy-conditions-after-disabled-period-overlay-right'>
                              <Popover.Content>
                                If enabled, the bot will re-schedule the
                                auto-buy trigger action if the action is
                                currently disabled by the stop-loss or other
                                actions.
                              </Popover.Content>
                            </Popover>
                          }>
                          <Button
                            variant='link'
                            className='p-0 m-0 ml-1 text-info'>
                            <i className='fas fa-question-circle fa-sm'></i>
                          </Button>
                        </OverlayTrigger>
                      </Form.Check.Label>
                    </Form.Check>
                  </Form.Group>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
