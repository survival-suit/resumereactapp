import { Fragment, useContext } from 'react'
import {
    FaGithubAlt,
    FaTelegram,
    FaYandex,
    FaLinkedin,
    FaGoogle,
    FaHome,
    FaMapMarker
} from 'react-icons/fa'

import Context from '../context'

import StoryHeader from './StoryHeader'

import Hr from './Hr'

export default function ContactsPart() {
    const context = useContext(Context)
    const size = '80px'
    const color = context.theme === 'dark' ? 'white' : 'rgb(30 41 59)'
    const services = {
        Moscow: {
            title: 'Moscow',
            target: '_blanc',
            href: 'https://yandex.ru/maps/213/moscow',
            icon: <FaMapMarker size={size} color={color} />,
        },
        GitHub: {
            title: 'GitHub',
            target: '_blanc',
            href: 'https://github.com/survival-suit',
            icon: <FaGithubAlt size={size} color={color} />,
        },
        Telegram: {
            title: 'Telegram',
            target: '_blanc',
            href: 'https://t.me/survival_suit',
            icon: <FaTelegram size={size} color={color} />,
        },
        Yandex: {
            title: 'Yandex',
            target: '_blanc',
            href: 'mailto:survivalsuit@yandex.ru',
            icon: <FaYandex size={size} color={color} />,
        },
        LinkedIn: {
            title: 'LinkedIn',
            target: '_blanc',
            href: 'https://www.linkedin.com/in/survivalsuit',
            icon: <FaLinkedin size={size} color={color} />,
        },
        Gmail: {
            title: 'Gmail',
            target: '_blanc',
            href: 'mailto:messier83wait@gmail.com',
            icon: <FaGoogle size={size} color={color} />,
        },
        Site: {
            title: 'Site',
            target: '',
            href: 'https://survival-suit.github.io/resumereactapp',
            icon: <FaHome size={size} color={color} />,
        },
    }

    return (
        <div className="flex flex-col items-center">
            {[...Object.values(services)].map((service) => (
                <Fragment key={service.title}>
                    <br/>
                    <a
                        href={service.href}
                        title={service.title}
                        target={service.target}
                    >
                        {service.icon}
                    </a>
                    <StoryHeader headerText={service.title} />
                    <br/>
                    <Hr wSize={'w-full'}/>
                </Fragment>
            ))}
        </div>
    )
}
