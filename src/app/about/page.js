import Breadcrumb from '../../components/layout/Breadcrumb'
import dynamic from 'next/dynamic'

const AboutContent = dynamic(() => import('@/components/about/AboutContent'), {
    ssr: false,
})
export default function About() {

    return (
        <>
            <Breadcrumb img="/slide3.jpg" pageName="about us" />
            <AboutContent />
        </>
    )
}

