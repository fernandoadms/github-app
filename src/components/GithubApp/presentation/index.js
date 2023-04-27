import UserInfo from './UserInfo'
import Search from './Search';
import Actions from './Actions'
import Repos from './Repos'
import PropTypes from 'prop-types';
import styles from './styles.module.scss'

const GithubAppPresentation = ({ 
	userInfo,
  repos,
  starred,
  handleRepo,
  handleSearch,
  loading,
  error,
}) => {
  return (
    <main className={styles["github-app"]}>
      <Search handleSearch={handleSearch} />

      {!!loading && `Carregando...` }

      {
        !!error && (
          error.status === 403 ? 'Ocorreu um erro do lado do servidor' : 'Usuário não encontrado'
        )
      }

      {!!userInfo && <UserInfo userInfo={userInfo} /> }

      {!!userInfo && <Actions handleRepo={handleRepo} /> }

      {!!repos.length && <Repos repos={repos} title="Repositórios" /> }
      
      {!!starred.length && <Repos repos={repos} title="Favoritos" /> }
    </main>
  )
}

GithubAppPresentation.propTypes = {
	userInfo: PropTypes.object,
  handleRepo: PropTypes.func,
  handleSearch: PropTypes.func,
  loading: PropTypes.bool,
  repos: PropTypes.array,
  starred: PropTypes.array,
}

export default GithubAppPresentation;