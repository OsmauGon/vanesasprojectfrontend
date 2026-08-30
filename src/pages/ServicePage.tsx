
import type { Publicidad } from '../types/publicidad-type'
import BannerDEpublicidad from '../components/BannerDEpublicidad'

type Props = {
    publis: Publicidad[] | null
}

const ServicePage = ({publis}: Props) => {
  return (
    <div>
        <h2>ServicePage</h2>
        <BannerDEpublicidad publis={publis}/>
        <p>Pagina en construcion</p>
    </div>
  )
}

export default ServicePage