import React, { useEffect } from 'react';
import { Dropdown } from 'flowbite';
import { logOut } from '../config/firebase';
import Link from 'next/link';
import Image from 'next/image';

const Avatar = ({ user }) => {
    useEffect(() => {
        if (user) {
            const $targetEl = document.getElementById('userDropdown');
            const $triggerEl = document.getElementById('avatarButton');

            if ($targetEl && $triggerEl) {
                new Dropdown($targetEl, $triggerEl, {
                    placement: 'bottom-start',
                    triggerType: 'click'
                });
            }
        }
    }, [user]);

    if (!user) return null;

    return (
        <div>
            <Image
                id="avatarButton"
                src={user && user.photoURL}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full cursor-pointer"
                alt="User avatar"
                priority
            />
            {/* <img
                id="avatarButton"
                type="button"
                className="w-8 h-8 rounded-full cursor-pointer"
                src={user && user.photoURL}
                crossOrigin="anonymous"
                alt="User dropdown"
            /> */}
            <div id="userDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-48 dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>{user.displayName}</div>
                    <div className="font-medium truncate">{user.email}</div>
                </div>
                {/* <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                    <li>
                        <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
                    </li>
                </ul> */}
                <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={logOut}>Sign out</a>
                </div>
            </div>
        </div>
    )
}

export default Avatar;
