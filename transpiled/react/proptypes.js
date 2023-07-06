import PropTypes from 'prop-types';
export var AppDoctype = PropTypes.shape({
  name: PropTypes.string,
  slug: PropTypes.string,
  developer: PropTypes.object,
  links: PropTypes.shape({
    icon: PropTypes.string
  }),
  latest_version: PropTypes.shape({
    version: PropTypes.string
  })
});
export var FileDoctype = PropTypes.shape({
  _id: PropTypes.string,
  class: PropTypes.string,
  mime: PropTypes.string,
  name: PropTypes.string
});