import React from 'react'
import Option from './Option'

const PriceOptions = () => {
  
  const priceOption = [
    {
      "id": "1",
      "name": "Basic",
      "price": "$30/month",
      "features": [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Access to locker rooms",
        "Limited group classes",
        "Access to showers",
        "Wi-Fi access"
      ]
    },
    {
      "id": "2",
      "name": "Standard",
      "price": "$50/month",
      "features": [
        "Access to all equipment and facilities",
        "Unlimited group classes",
        "Personalized workout plans",
        "Access to sauna"
      ]
    },
    {
      "id": "3",
      "name": "Premium",
      "price": "$80/month",
      "features": [
        "All features of Standard plan",
        "Access to sauna and steam room",
        "Towel service",
        "Discounts on personal training sessions",
        "Access to massage chairs",
        "Access to sports drinks"
      ]
    }
  ];

  console.log(priceOption);
    
  return (
    <div>
      <h2 className='text-4xl'>Best Prices for your</h2>
      <div className='grid md:grid-cols-3 gap-4'>
        {
          priceOption.map(option => <Option key={option.id} option = {option} />)
        }
      </div>
    </div>
  )
}

export default PriceOptions
