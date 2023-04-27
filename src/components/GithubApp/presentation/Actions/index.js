import style from "./styles.module.scss";
import PropTypes from 'prop-types';

const Actions = ({
  handleRepo
}) => {
  return (
    <div className={style.actions}>
      <button onClick={() => handleRepo('repos')}>
        Ver Repositórios
      </button>
        
      <button onClick={() => handleRepo('starred')}>
        Ver Favoritos
      </button>
    </div>
  )
}

Actions.propTypes = {
  handleRepo: PropTypes.func,
}

export default Actions;