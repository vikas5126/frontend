import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Category = () => {
    const products = [
        {
          "id": 1,
          "images": [
      "https://images.unsplash.com/photo-1508779018996-601e37fa274e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG51dHN8ZW58MHx8MHx8fDA%3D"
          ],
          "category": "Nuts and Dry Fruits",
          "name": "Mamra Badam",
          "variants": [
         
            {"weight": "250g", "price": 600},
            {"weight": "500g", "price": 1180},
            {"weight": "1kg", "price": 2350}
          ],
          "description": "Mamra Badam is a high-quality variety of almonds, known for its rich flavor and texture, commonly consumed for health benefits.",
          "benefits": [
            "Mamra Badam is packed with vitamin E, magnesium, and antioxidants that help support heart health, boost brain function, and improve skin health.",
            "Eating Mamra Badam regularly can assist in lowering bad cholesterol levels and enhancing overall digestive health, contributing to a well-balanced diet.",
            "It’s a perfect snack for those seeking a natural, nutrient-dense food that provides sustained energy, promotes weight loss, and strengthens bones."
          ]
        },
        {
          "id": 2,
          "images": [
            "https://www.istockphoto.com/photo/raw-brown-almonds-in-a-bowl-on-a-gray-surface-top-view-flat-lay-overhead-from-above-gm2070192445-564540339?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Falmond&utm_medium=affiliate&utm_source=unsplash&utm_term=almond%3A%3A%3A"
          ],
          "category": "Nuts and Dry Fruits",
          "name": "Sanora Badam",
          "variants": [
            {"weight": "100g", "price": 100},
            {"weight": "250g", "price": 250},
            {"weight": "500g", "price": 490},
            {"weight": "1kg", "price": 980},
            {"weight": "2kg", "price": 1950}
          ],
          "description": "Sanora Badam, with its premium taste and texture, is a favorite among those who appreciate the finer almonds for snacking and recipes.",
          "benefits": [
            "Sanora Badam is rich in vitamins and minerals that contribute to better heart health, improved cognitive function, and stronger immunity.",
            "It helps regulate blood sugar levels, aids digestion, and provides lasting energy, making it an ideal snack for active individuals.",
            "This variety of almonds is also known for its antioxidant properties, which help protect against oxidative stress and promote youthful skin."
          ]
        },
        {
          "id": 3,
          "images": [
            "https://media.istockphoto.com/id/1535516281/photo/makhana-is-lotus-seeds-or-fox-nuts-used-to-preparing-various-foods-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=6aNo6HqRmVwXH4Zia90Kc0Sls5U7jB4XPrl5tyZitdo="
          ],
          "category": "Nuts and Dry Fruits",
          "name": "Makhana HP",
          "variants": [
            {"weight": "100g", "price": 180},
            {"weight": "250g", "price": 440},
            {"weight": "500g", "price": 860},
            {"weight": "1kg", "price": 1700},
            {"weight": "2kg", "price": 3350}
          ],
          "description": "Makhana HP is a roasted, healthy snack with numerous benefits for digestion and overall health, often used in traditional and modern recipes.",
          "benefits": [
            "Makhana HP is an excellent source of protein, fiber, and magnesium, which helps in managing weight, boosting energy, and strengthening bones.",
            "Consuming Makhana HP regularly can promote better digestive health and improve heart function due to its low-fat and low-sodium properties.",
            "This snack is known for its antioxidant content, which helps in reducing inflammation and preventing cell damage, making it a superfood choice."
          ]
        },
        {
          "id": 4,
          "images": [
            "https://media.istockphoto.com/id/1535516281/photo/makhana-is-lotus-seeds-or-fox-nuts-used-to-preparing-various-foods-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=6aNo6HqRmVwXH4Zia90Kc0Sls5U7jB4XPrl5tyZitdo="
          ],
          "category": "Nuts and Dry Fruits",
          "name": "Makhana Medium",
          "variants": [
            {"weight": "100g", "price": 150},
            {"weight": "250g", "price": 370},
            {"weight": "500g", "price": 740},
            {"weight": "1kg", "price": 1450},
            {"weight": "2kg", "price": 2800}
          ],
          "description": "Makhana Medium offers a perfect balance of texture and taste, ideal for health-conscious individuals looking for low-calorie snacks.",
          "benefits": [
            "Makhana Medium is rich in protein, which supports muscle repair, and has a high content of antioxidants to improve immunity.",
            "Its magnesium content can help regulate blood pressure and contribute to better brain function, while being a perfect snack for weight management.",
            "With its high fiber and low glycemic index, Makhana Medium promotes better digestion, stabilizes blood sugar levels, and is an ideal choice for diabetics."
          ]
        },
        {
          "id": 5,
          "images": [
            "https://media.istockphoto.com/id/1535516281/photo/makhana-is-lotus-seeds-or-fox-nuts-used-to-preparing-various-foods-in-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=6aNo6HqRmVwXH4Zia90Kc0Sls5U7jB4XPrl5tyZitdo="
          ],
          "category": "Nuts and Dry Fruits",
          "name": "Makhana Small",
          "variants": [
            {"weight": "100g", "price": 120},
            {"weight": "250g", "price": 300},
            {"weight": "500g", "price": 600},
            {"weight": "1kg", "price": 1180},
            {"weight": "2kg", "price": 2350}
          ],
          "description": "Makhana Small is a great alternative to chips and other unhealthy snacks, offering a nutritious snack option that can be consumed anytime.",
          "benefits": [
            "Makhana Small is packed with essential nutrients like fiber and protein, helping to promote healthy digestion and keep you feeling full for longer.",
            "It has low-fat content and is rich in antioxidants, supporting your immune system and reducing the effects of oxidative stress.",
            "This snack also supports heart health by improving blood circulation and lowering cholesterol levels, making it an excellent choice for overall well-being."
          ]
        },
        {
          "id": 6,
          "images": [
            "https://images.unsplash.com/photo-1686721635283-70e6344183e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FqdXxlbnwwfHwwfHx8MA%3D%3D"
          ],
          "category": "Nuts and Dry Fruits",
          "name": "Kaju W240",
          "variants": [
            {"weight": "100g", "price": 110},
            {"weight": "250g", "price": 260},
            {"weight": "500g", "price": 520},
            {"weight": "1kg", "price": 1000},
            {"weight": "2kg", "price": 2000}
          ],
          "description": "Kaju W240 is a premium variety of cashew nuts, known for their large size, rich flavor, and health benefits.",
          "benefits": [
            "Kaju W240 is a rich source of healthy fats, protein, and vitamins, promoting better heart health, brain function, and overall immunity.",
            "Consuming Kaju regularly helps with weight management, improves digestion, and supports muscle development and skin health.",
            "These cashews also contain antioxidants, which help fight free radicals and reduce inflammation in the body, making them ideal for a healthy diet."
          ]
        },
        {
          "id": 7,
          "images": [
            "https://images.unsplash.com/photo-1686721635333-d71af2f1084b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2FqdXxlbnwwfHwwfHx8MA%3D%3D"
          ],
          "category": "Nuts and Dry Fruits",
          "name": "Kaju W180",
          "variants": [
            {"weight": "100g", "price": 130},
            {"weight": "250g", "price": 320},
            {"weight": "500g", "price": 620},
            {"weight": "1kg", "price": 1200},
            {"weight": "2kg", "price": 2400}
          ],
          "description": "Kaju W180 is another high-quality variety of cashews, smaller in size but packed with the same rich, nutritious benefits.",
          "benefits": [
            "Kaju W180 promotes better digestion, heart health, and boosts immunity due to its high magnesium, zinc, and antioxidants content.",
            "It can help maintain healthy skin, support weight loss, and reduce bad cholesterol levels, making it a great addition to any diet.",
            "Rich in essential nutrients, Kaju W180 also helps improve bone health, strengthens muscles, and provides a natural energy boost."
          ]
        },
        {
          "id": 8,
          "images": [
            "https://images.unsplash.com/photo-1686721635283-70e6344183e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FqdXxlbnwwfHwwfHx8MA%3D%3D"
          ],
          "category": "Nuts and Dry Fruits",
          "name": "Kaju 320",
          "variants": [
            {"weight": "100g", "price": 100},
            {"weight": "250g", "price": 240},
            {"weight": "500g", "price": 480},
            {"weight": "1kg", "price": 930},
            {"weight": "2kg", "price": 1850}
          ],
          "description": "Kaju 320 is another premium cashew variety, known for its high quality and creamy flavor, perfect for snacking or cooking.",
          "benefits": [
            "Kaju 320 is packed with protein, essential fatty acids, and vitamins, which help in building muscle mass, boosting immunity, and improving brain health.",
            "It has heart-healthy fats that support cholesterol balance and promotes a healthier cardiovascular system.",
            "Consuming Kaju 320 can improve skin texture and promote hair growth, offering a great combination of beauty and health benefits."
          ]
        },
        {
          "id": 9,
          "images": [
            "https://images.pexels.com/photos/2263906/pexels-photo-2263906.jpeg"
          ],
          "category": "Nuts and Dry Fruits",
          "name": "Pista",
          "variants": [
            {"weight": "100g", "price": 170},
            {"weight": "250g", "price": 400},
            {"weight": "500g", "price": 750},
            {"weight": "1kg", "price": 1400},
            {"weight": "2kg", "price": 2700}
          ],
          "description": "Pista, also known as pistachio nuts, is a delicious and nutritious snack with a rich flavor and numerous health benefits.",
          "benefits": [
            "Pista is rich in protein, fiber, and healthy fats, supporting muscle growth, weight management, and heart health.",
            "It is an excellent source of antioxidants, which help fight inflammation and protect the body from oxidative damage.",
            "Pista also promotes healthy skin and eye health due to its high vitamin E and lutein content, making it a great snack for overall wellness."
          ]
        },
        {
          "id": 10,
          "images": [
            "https://media.istockphoto.com/id/1422963651/photo/color-lots-of-kismis-dry-fruit.jpg?s=2048x2048&w=is&k=20&c=30ZGGZOtTjf0vayOKxAuRS5PjboiNR37VtJS3rr5UL8="
          ],
          "category": "Nuts and Dry Fruits",
          "name": "Kismis",
          "variants": [
            {"weight": "100g", "price": 50},
            {"weight": "250g", "price": 120},
            {"weight": "500g", "price": 240},
            {"weight": "1kg", "price": 450},
            {"weight": "2kg", "price": 899}
          ],
          "description": "Kismis, also known as raisins, are dried grapes that offer a sweet and nutritious snack, commonly used in baking and cooking.",
          "benefits": [
            "Kismis is high in fiber and antioxidants, promoting digestive health, improving heart function, and boosting immunity.",
            "The natural sugars in Kismis provide quick energy, making it a perfect snack for athletes and those with an active lifestyle.",
            "Rich in iron and potassium, Kismis can also help in treating anemia and maintaining healthy blood pressure levels."
          ]
        },
        {
          "id": 11,
          "images": [
            "https://media.istockphoto.com/id/1423113232/photo/group-of-peeled-walnuts-and-whole-walnuts-directly-above.webp?a=1&b=1&s=612x612&w=0&k=20&c=syUh6vwokNnh5uAMMkoRk1pKEwKIGquftdDx4-Gn8PM="
          ],
          "category": "Nuts and Dry Fruits",
          "name": "Akhroat",
          "variants": [
            {"weight": "100g", "price": 150},
            {"weight": "250g", "price": 370},
            {"weight": "500g", "price": 720},
            {"weight": "1kg", "price": 1440},
            {"weight": "2kg", "price": 2840}
          ],
          "description": "Akhroat, also known as walnuts, are an excellent source of omega-3 fatty acids, making them perfect for heart health and cognitive function.",
          "benefits": [
            "Akhroat is packed with antioxidants, which help reduce inflammation and protect against heart disease and cancer.",
            "The omega-3 fatty acids in Akhroat help improve brain function, memory, and may aid in reducing symptoms of depression.",
            "Consuming Akhroat can also improve skin health and boost metabolism, helping to manage weight naturally."
          ]
        }
      ]
  return (
    <>
    <Navbar/>
    <div>
        {products.map((product) => (
            <div key={product.id} className="product-card">
                <h2>{product.name}</h2>
                <img src={product.images[0]} alt={product.name} />
                <p>{product.description}</p>
                <h3>Variants:</h3>
                <ul>
                    {product.variants.map((variant) => (
                        <li key={variant.weight}>
                            {variant.weight}: ₹{variant.price}
                        </li>
                    ))}
                </ul>
                {/* <h3>Benefits:</h3>
                <ul>
                    {product.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                    ))}
                </ul> */}
            </div>
        ))}
    </div>
    <Footer/>
    </>
  )
}

export default Category