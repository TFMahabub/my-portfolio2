import React from 'react';
import TitleText from '../../../ReuseableComponents/TitleText';
import html from '../../../../Assets/slills/html.png'
import css from '../../../../Assets/slills/css.png'
import javaScript from '../../../../Assets/slills/javaScript.png'
import react from '../../../../Assets/slills/react.png'
import redux from '../../../../Assets/slills/redux.png'
import tailwind from '../../../../Assets/slills/tailwind.png'
import bootstrap from '../../../../Assets/slills/Bootstrap.png'
import materialUI from '../../../../Assets/slills/material UI.png'
import git from '../../../../Assets/slills/git.png'
import github from '../../../../Assets/slills/github.png'
import firebase from '../../../../Assets/slills/firebase.png'
import node from '../../../../Assets/slills/node.png'
import express from '../../../../Assets/slills/express.png'
import mongoDB from '../../../../Assets/slills/mongoDB.png'
import typeScript from '../../../../Assets/slills/typeScript.png'

const Skills = () => {
  return (
    <section id='skills' className='bg-primary'>
      <div className='max-w-[910px] px-3 lg:px-0 mx-auto py-7 lg:py-[80px]'>
        <TitleText>Skills</TitleText>
        <div className='mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-11' src={html} alt="" />
            <p className='text-xl font-medium text-secondary'>HTML5</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-11' src={css} alt="" />
            <p className='text-xl font-medium text-secondary'>CSS3</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-12' src={javaScript} alt="" />
            <p className='text-xl font-medium text-secondary'>JavaScript</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-12' src={react} alt="" />
            <p className='text-xl font-medium text-secondary'>React.js</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-[52px]' src={redux} alt="" />
            <p className='text-xl font-medium text-secondary'>Redux</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-16' src={tailwind} alt="" />
            <p className='text-xl font-medium text-secondary'>Tailwind</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-14' src={bootstrap} alt="" />
            <p className='text-xl font-medium text-secondary'>Bootstrap3</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-14' src={materialUI} alt="" />
            <p className='text-xl font-medium text-secondary'>Material UI</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-[52px]' src={git} alt="" />
            <p className='text-xl font-medium text-secondary'>Git</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-[52px]' src={github} alt="" />
            <p className='text-xl font-medium text-secondary'>Github</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-11' src={firebase} alt="" />
            <p className='text-xl font-medium text-secondary'>Firebase</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-12' src={node} alt="" />
            <p className='text-xl font-medium text-secondary'>Node.js</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-[130px]' src={express} alt="" />
            <p className='text-xl font-medium text-secondary'>Express.js</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-7' src={mongoDB} alt="" />
            <p className='text-xl font-medium text-secondary'>MongoDB</p>
          </div>
          <div className='flex flex-col justify-end items-center'>
            <img className='w-12' src={typeScript} alt="" />
            <p className='text-xl font-medium text-secondary'>TypeScript</p>
          </div>
        </div>
      </div>
        
    </section>
  );
};

export default Skills;