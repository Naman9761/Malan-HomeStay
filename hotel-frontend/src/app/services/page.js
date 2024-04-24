import Breadcrumb from '../../components/layout/Breadcrumb';
import dynamic from 'next/dynamic';

const ServiceCard = dynamic(() => import('@/components/services/ServicesCard'), {
  ssr: false,
})



export default function Services() {

  return (
    <>
      <Breadcrumb img="/slide3.jpg" pageName="services" />
      <ServiceCard />
    </>

  )
}

