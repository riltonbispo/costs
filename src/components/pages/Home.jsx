import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
  return(
    <section className={styles.home_container} >
      <h1>Bem vindo ao <span>Costs</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <LinkButton to='/newproject' text="Criar projeto"></LinkButton>
      <img src={savings} alt="costs" />
    </section>
  )
}

export default Home