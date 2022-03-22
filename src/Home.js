import React from 'react';
import './Home.css';
import Drug from './Drug';

// The Home Page with products, images and their info
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
                className='home__image'
                src='https://firebasestorage.googleapis.com/v0/b/drug-store-9dcfb.appspot.com/o/ZDS%20Easter%20Sale%20Banner.svg?alt=media&token=63637d45-7f11-42c6-82ec-8c36e931597d' alt=''
            />
            <div className='home__row'>
                <Drug
                id='1234'
                title='Asprin: reduce fever and relieve mild to moderate pain from conditions such as muscle aches, toothaches, common cold, and headaches.'
                price={10.00}
                image='https://firebasestorage.googleapis.com/v0/b/drug-store-9dcfb.appspot.com/o/Aspirin.jpg?alt=media&token=45d44590-a26b-4c44-8ffe-e971398acc46' alt=''
                />
                <Drug 
                id='1235'
                title='Diclofenac: reduces swelling (inflammation) and pain. It is used to treat aches and pains, as well as problems with joints, muscles and bones.'
                price={20.00}
                image='https://firebasestorage.googleapis.com/v0/b/drug-store-9dcfb.appspot.com/o/Diclofenac.jpg?alt=media&token=efbf54f2-50ba-45dc-b8d8-7425de5ec200' alt=''
                />
                <Drug 
                id='1241'
                title='Metoprolol: changes the way your body responds to some nerve impulses, especially in the heart and slows down your heart rate.'
                price={53.25}
                image='https://firebasestorage.googleapis.com/v0/b/drug-store-9dcfb.appspot.com/o/Metoprolol.jpg?alt=media&token=cd3427f7-805b-4d17-a0b3-bbfdd8bf4f58' alt=''
                />
            </div>
            <div className='home__row'>
                <Drug 
                id='1236'
                title='Cetirizine: helps remedy symptoms due to allergies,  It is used to treat hay fever, conjunctivitis (red and itchy eyes).'
                price={25.00}
                image='https://firebasestorage.googleapis.com/v0/b/drug-store-9dcfb.appspot.com/o/Cetirizine.jpg?alt=media&token=d740e537-b658-409a-bd30-d5a91a8c98bb' alt=''
                />
                <Drug 
                id='1237'
                title='Insulin Lispro: replaces the insulin produced by the body by helping move sugar from the blood into other body tissues.'
                price={83.45}
                image='https://firebasestorage.googleapis.com/v0/b/drug-store-9dcfb.appspot.com/o/Insulin%20Lispro.jpg?alt=media&token=6ca8208f-4b20-4564-a513-1646eda4289e' alt=''
                />
                <Drug 
                id='1238'
                title='Amoxicillin: treats general bacterial infections, such as chest infections (including pneumonia), dental abscesses and stomach ulcers.'
                price={5.99}
                image='https://firebasestorage.googleapis.com/v0/b/drug-store-9dcfb.appspot.com/o/Amoxicillin.jpg?alt=media&token=59db53b2-04f0-430d-b847-b2aa149c11fa' alt=''
                />
            </div>
            <div className='home__row'>
                <Drug 
                id='1239'
                title='Omeprazole: treats frequent heartburn in adults by reducing the amount of acid made in the stomach.'
                price={23.45}
                image='https://firebasestorage.googleapis.com/v0/b/drug-store-9dcfb.appspot.com/o/Omeprazole.jpg?alt=media&token=47e10ae2-8ed9-4b58-8afe-fb7d51dfa5e1' alt=''
                />
                <Drug 
                id='1242'
                title='Levothyroxine: used to treat an underactive thyroid gland (hypothyroidism), it is taken to replace the missing thyroid hormone thyroxine.'
                price={100.40}
                image='https://firebasestorage.googleapis.com/v0/b/drug-store-9dcfb.appspot.com/o/Levothyroxine.jpg?alt=media&token=c9faf8c5-1835-4520-9653-2026aa8e5595' alt=''
                />
                <Drug 
                id='1243'
                title='Ibuprofen: changes the way your body responds to some nerve impulses, especially in the heart and slows down your heart rate.'
                price={14.99}
                image='https://firebasestorage.googleapis.com/v0/b/drug-store-9dcfb.appspot.com/o/Ibuprofen-200mg-768x768.jpg?alt=media&token=4ef7598c-eaa5-47a3-a0fc-86062c60b6e8' alt=''
                />
            </div>
        </div>
    </div>
  )
}

export default Home;