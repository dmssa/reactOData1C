import React from 'react';
import { Header as UiHeader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header =() => 
    <Link to={{ pathname:'/' }}>
        <UiHeader as='h2'>Интернет-магазин на 1С Предприятие </UiHeader>
    </Link>
export default Header;