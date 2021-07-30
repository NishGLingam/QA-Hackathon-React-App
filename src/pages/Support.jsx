import React from 'react';

import Header from '../components/General/Header';
import supportImage from '../images/Support.png';

const Support = () => {
    return (
        <div>
            <Header />
            <div className='page-container'>
                <div className = 'page-title'> Getting Started with NBS Engage</div>
                <img className = 'page-image' src={supportImage} alt='support'/>
                <div className='support-FAQs'>
                    <div className="FAQ-title"> Frequent Asked Questions </div>
                    <ul>
                        <li className='FAQ-question'> How do I share a file? </li>
                        <div className='FAQ-answer'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim convallis metus, egestas volutpat nunc pharetra vitae. Curabitur bibendum neque nunc, non porta nibh suscipit eget. Curabitur at velit blandit diam facilisis interdum. Morbi convallis augue sit amet sem facilisis condimentum. Nulla quis tristique mauris. Aenean interdum mollis quam, at hendrerit lorem posuere sit amet. Nulla augue felis, dapibus vitae porta sed, tristique vitae tortor. In tempor consequat sapien at finibus. Aenean gravida condimentum dui quis fringilla. Morbi facilisis ipsum sed ullamcorper pellentesque. Suspendisse in mi imperdiet, laoreet odio vel, tincidunt diam.</div>
                        <li className='FAQ-question'> How do I connect to people? </li>
                        <div className='FAQ-answer'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim convallis metus, egestas volutpat nunc pharetra vitae. Curabitur bibendum neque nunc, non porta nibh suscipit eget. Curabitur at velit blandit diam facilisis interdum. Morbi convallis augue sit amet sem facilisis condimentum. Nulla quis tristique mauris. Aenean interdum mollis quam, at hendrerit lorem posuere sit amet. Nulla augue felis, dapibus vitae porta sed, tristique vitae tortor. In tempor consequat sapien at finibus. Aenean gravida condimentum dui quis fringilla. Morbi facilisis ipsum sed ullamcorper pellentesque. Suspendisse in mi imperdiet, laoreet odio vel, tincidunt diam.</div>
                        <li className='FAQ-question'> How do I reset my password? </li>
                        <div className='FAQ-answer'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim convallis metus, egestas volutpat nunc pharetra vitae. Curabitur bibendum neque nunc, non porta nibh suscipit eget. Curabitur at velit blandit diam facilisis interdum. Morbi convallis augue sit amet sem facilisis condimentum. Nulla quis tristique mauris. Aenean interdum mollis quam, at hendrerit lorem posuere sit amet. Nulla augue felis, dapibus vitae porta sed, tristique vitae tortor. In tempor consequat sapien at finibus. Aenean gravida condimentum dui quis fringilla. Morbi facilisis ipsum sed ullamcorper pellentesque. Suspendisse in mi imperdiet, laoreet odio vel, tincidunt diam.</div>
                        <li className='FAQ-question'> Contact Us </li>
                        <div className='FAQ-answer'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim convallis metus, egestas volutpat nunc pharetra vitae. Curabitur bibendum neque nunc, non porta nibh suscipit eget. Curabitur at velit blandit diam facilisis interdum. Morbi convallis augue sit amet sem facilisis condimentum. Nulla quis tristique mauris. Aenean interdum mollis quam, at hendrerit lorem posuere sit amet. Nulla augue felis, dapibus vitae porta sed, tristique vitae tortor. In tempor consequat sapien at finibus. Aenean gravida condimentum dui quis fringilla. Morbi facilisis ipsum sed ullamcorper pellentesque. Suspendisse in mi imperdiet, laoreet odio vel, tincidunt diam.</div>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Support;