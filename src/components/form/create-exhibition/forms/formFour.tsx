import React, { useState } from "react";
import styles from "./formFour.module.scss";
import { Button, ExpositionBoard, Tooltip } from "@components";
import cardImg from "../../../../assets/images/cardImg.png"

const toolTipText = "Veuillez vérifier miniteusement les informations concernant votre exposition car aucune modification ne sera possible par la suite."

export interface IProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  onClick: (any) => void;
  defaultValues?: any;
}

export interface IRecapProps {
  handleStepSubmit: (data: any) => void;
  handleBack: () => void;
  formState: any;
}


export const FormFour: React.FC<IRecapProps> = () => {

  const [orientation, setOrientation] = useState<string>('landscape')

  return (
    <>
      <div className={styles.toolTip}>
        <Tooltip text={toolTipText} icon="info" type="info" />
      </div>

      <form className={styles.formContainer}>
        <div className={orientation === 'portrait' ? styles.portrait : ''}>
          <ExpositionBoard src={cardImg} alt={""} orientation={orientation} />
        </div>
        <div className={styles.alignLeft}>
        <h1 className={styles.title}>Ma mère, musicienne, est morte de maladie maligne à minuit, mardi à mercredi,</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent adipiscing suspendisse varius sit risus. In arcu, lorem ridiculus dui faucibus. Lectus aenean morbi purus amet quis. Mi habitant diam id dignissim tempus. Pharetra, amet sit malesuada interdum accumsan adipiscing eros imperdiet. Neque, volutpat at commodo, mauris a ut et libero imperdiet. Id nibh a, volutpat sollicitudin aliquet. Et ipsum aliquam scelerisque mauris laoreet sit ac facilisis. In phasellus nisi cras vitae, tortor, leo.</p>
          <ul className={styles.list}>
            <li>
              <strong className={styles.bold}>Votre profil facebook :</strong> https://facebook.com/mon-profil
            </li>
            <li>
              <strong className={styles.bold}>Votre site personnel :</strong> https://facebook.com/mon-profil
            </li>
            <li>
              <strong className={styles.bold}>Votre portfolio :</strong>https://facebook.com/mon-profil
            </li>
            <li>
              <strong className={styles.bold}>Votre boutique en ligne :</strong> https://facebook.com/mon-profil
            </li>
          </ul>

          <p className={styles.marginTop40}>
            Votre exposition à lieu à
            <strong className={styles.bold}>VILLE</strong>
            dans la gallerie n°<strong className={styles.bold}>NUMBER</strong>
            située à <strong className={styles.bold}>ADRESSE</strong>
          </p>
          <p className={styles.marginTop16}>
            Votre exposition aura lieu du
            <strong className={styles.bold}>STARTDATE</strong>
            au <strong className={styles.bold}>ENDDATE</strong>
          </p>

          <div className={styles.ctaContainer}>
            <Button label={"Étape suivante"} color="black" bg="light" type="submit" />
            <Button label={"Étape précédente"} color="white" bg="dark" type="submit" />
          </div>
        </div>

      </form>
    </>
  )
}
