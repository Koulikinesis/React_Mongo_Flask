import React, { Component } from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import {  LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        const features = [
            {
              name: 'Push to deploy.',
              description:
                'Make progress one task at a time. Experience the satisfaction of ticking off completed items on our to-do list.',
              icon: CloudArrowUpIcon,
            },
            {
              name: 'SSL certificates.',
              description: 'Maximize your productivity and accomplish more. Our to-do list helps you stay on track and achieve success.',
              icon: LockClosedIcon,
            },
            {
              name: 'Database backups.',
              description: 'Stay motivated with our reminders and notifications. Never let important tasks slip through the cracks.',
              icon: ServerIcon,
            },
          ]    
        return (
            <div>
            <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 sm:px-3.5 sm:before:flex-1 -pb-2">
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900 pt-3">
          <strong className="font-semibold">TodoList__</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
          Take control of your schedule. Create, prioritize, and complete tasks with ease using our to-do list.
        </p>
        
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>          
        </button>
      </div>
    </div>
          
    <div className="overflow-hidden bg-white py-4 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">              
              <p className="mt-2 text-16xl font-semibold tracking-tight text-gray-900 sm:text-4xl">TodoList__</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Effortlessly manage your tasks and boost your productivity with our intuitive to-do list interface__
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/41227/pexels-photo-41227.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 opacity-50"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </div>
            </div>
        )
    }
}

export default HeaderComponent
