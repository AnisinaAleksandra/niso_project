import React, { useState } from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTheme } from 'app/providers/ThemeProvider';
interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
   const { theme, toggleTheme } = useTheme();
    
    return (
        <>
            <div className={classNames(cls.navbar, {}, [className])}>
            
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'}>
                    О сайте
                </AppLink>
                 <ThemeSwitcher/>
            </div>
        </div>
              
        </>
      
    );
};
