import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Field } from 'react-final-form';

import {
  Col,
  TextField,
  InfoPopover,
} from '@folio/stripes-components';


const propTypes = {
  fieldNamePrefix: PropTypes.string.isRequired,
};

const validate = value => {
  if (value?.length > 100) {
    return <FormattedMessage id="stripes-smart-components.customFields.helpText.lengthExceeded" />;
  }

  return null;
};

const HelpTextField = ({ fieldNamePrefix }) => (
  <Col xs={3}>
    <Field
      component={TextField}
      name={`${fieldNamePrefix}.helpText`}
      label={
        <>
          <FormattedMessage id="stripes-smart-components.customFields.helperText" />
          <InfoPopover
            content={<FormattedMessage id="stripes-smart-components.customFields.helperText.description" />}
            iconSize="small"
          />
        </>
      }
      validate={validate}
    />
  </Col>
);

HelpTextField.propTypes = propTypes;

export default HelpTextField;
