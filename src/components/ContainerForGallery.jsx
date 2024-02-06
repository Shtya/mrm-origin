import React from 'react'
import { ImageGalleryHome, ImageGalleryHomeSchema } from './Images2'
import { useTranslation } from 'react-i18next'
import SliderHOME from './SLIDER_MRM/SliderHOME'

const ContainerForGallery = () => {
  const {t} =useTranslation()
  return (
    <SliderHOME schema={ImageGalleryHomeSchema} DATA={ImageGalleryHome} typeOf="Signages" title={t("home.Home_Header.name")}   header1={t("home.Home_Header.header",{returnObjects:true})} /> 
  )
}

export default ContainerForGallery