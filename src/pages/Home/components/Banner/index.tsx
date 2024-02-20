import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import imageBanner from '../../../../assets/image-banner.png'
import { BannerContainer, IconList, ImageBanner, ListBenefits, SubtitleBanner, TitleBanner } from "./styles";

export function Banner() {
    return (
        <BannerContainer>
            <div>
                <TitleBanner>
                    Encontre o café perfeito para qualquer hora do dia
                </TitleBanner>
                <SubtitleBanner>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </SubtitleBanner>

                <ListBenefits>
                    <li>
                        <IconList><ShoppingCart size={16} color="white" weight="fill" /></IconList>
                        Compra simples e segura
                    </li>
                    <li>
                        <IconList><Package size={16} color="white" weight="fill" /></IconList>
                        Embalagem mantém o café intacto
                    </li>
                    <li>
                        <IconList><Timer size={16} color="white" weight="fill" /></IconList>
                        Entrega rápida e rastreada
                    </li>
                    <li>
                        <IconList><Coffee size={16} color="white"  weight="fill" /></IconList>
                        O café chega fresquinho até você   
                    </li>
                </ListBenefits>
            </div>

            <ImageBanner src={imageBanner} alt="Imagem de um café com um fundo amarelo" />
        </BannerContainer>
    ) 
}