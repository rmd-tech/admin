import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Typography } from '@strapi/design-system/Typography';
import { Box } from '@strapi/design-system/Box';
import { getTrad } from '../../utils';

const State = ({ isPublished }) => {
  console.log('isPublished.Published', isPublished);
  const { formatMessage } = useIntl();
  const content = formatMessage({
    id: getTrad(`containers.List.${isPublished.isPublished ? 'published' : (isPublished.isScheduled ? 'scheduled' : 'draft')}`),
  });
  const background = isPublished ? 'success100' : 'secondary100';
  const textColor = isPublished ? 'success700' : 'secondary700';

  return (
    <Box
      background={background}
      hasRadius
      paddingTop={1}
      paddingBottom={1}
      paddingLeft={2}
      paddingRight={2}
      style={{ width: 'fit-content' }}
    >
      <Typography fontWeight="bold" textColor={textColor}>
        {content}
      </Typography>
    </Box>
  );
};

State.propTypes = {
  isPublished: PropTypes.bool.isRequired,
};

export default State;
