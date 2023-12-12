import PropTypes from 'prop-types'
import classes from './Section.module.css'

const Section = (props) => {
  return <section className={classes.section}>{props.children}</section>
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
