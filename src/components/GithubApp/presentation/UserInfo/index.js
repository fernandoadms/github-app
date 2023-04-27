//TODO: Use <Image /> instead <img />
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const UserInfo = ({userInfo}) => {
	return (
		<div className={styles['user-info']}>
			<img
				src={userInfo.avatar_url}
				alt={'Photo of ' + userInfo.avatar_url}
				
			/>

			<div>
				<h1>
					<a href={`https://github.com/${userInfo.login}`} target="_blank">
						{userInfo.name}
					</a>
				</h1> 
				
				<ul>
					<li><strong>Repositórios:</strong> {userInfo.public_repos}</li>
					<li><strong>Seguidores:</strong> {userInfo.followers}</li>
					<li><strong>Seguindo:</strong> {userInfo.following}</li>
				</ul>
			</div>
		</div>
	)
}

UserInfo.propTypes = {
	userInfo: PropTypes.shape({
		login: PropTypes.string,
    avatar_url: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    name: PropTypes.string,
    public_repos: PropTypes.number,
  }),
};

export default UserInfo;


