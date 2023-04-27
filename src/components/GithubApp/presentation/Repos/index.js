import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const Repos = ({ title, repos }) => {
  return (
    <div className={styles.repo}>
      <h2>{title}</h2>

      <ul>
        {
          repos.map((repo, index) => (
            <li key={index}>
              <a href={repo.url}>{repo.name}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

Repos.propTypes = {
  title: PropTypes.string,
  repos: PropTypes.array,
}

export default Repos;