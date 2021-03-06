import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavouritesContext from '../../store/favourites-context';
import { useContext } from 'react';

function MainNavigation(){
    const favouritesCtx = useContext(FavouritesContext);

    return(
        <header className={classes.header}>
            <div>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add new Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>
                            My favourites
                            <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>
                            </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default MainNavigation;