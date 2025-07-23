import React from 'react'
import { HeroSection, OurTeam, AllToursLarge } from '@/components/shared'
import { Button } from '@/components/ui/Button'
import { AboutUsHeroImg, AboutUsDes1, AboutUsDes2, AboutUsDes3, OurGlobalFamliyAboutUs, TeamMemberImg1, TeamMemberImg2, TeamMemberImg3, TeamMemberImg4, TeamMemberImg5, TeamMemberImg6, TeamMemberImg7 } from '@/assets'
import Image from 'next/image'
import { Heading, Paragraph } from "@/components/ui/typography";
function AboutUs() {
    const HeroSectionDetails = {
        title: 'About Us',
        paraText: 'We’re a small team of people who are passionate about travel. Our goal is to create unique, inspiring, and thoughtful tours that surprise and delight you. We’re just as excited as you are about travel and we make it our mission to ensure that on one of our tours, you’re thrilled from start to finish!',
        ImgUrl: AboutUsHeroImg,
    }

    const ourTeam = [
        {
            imgUrl: TeamMemberImg1,
            p1: 'Travel is basically all I know. After graduating university in 1999, I took a 3 month trip to Southeast Asia but I decided that 3 months wasn’t enough and I’ve been traveling all over the world ever since.',
            p2: 'In 2010, I started the travel blog, WanderingEarl.com, to share my thoughts about what I was experiencing. By 2012, I was receiving regular emails from readers asking me to organize trips to some of my favorite countries.',
            p3: 'And so I did.',
            p4: 'What started off as 1 trip to India back in 2012, has now become a long list of awesome Wandering Earl Tours each year, with new destinations and itineraries being added all the time!',
            name: 'Derek Baron',
            position: 'CEO',
            Direction: 'flex-row',
        },
        {
            imgUrl: TeamMemberImg2,
            p1: 'Travel has always been my greatest passion. I’ve worked in different countries since I was 18, going on adventures in Europe and Africa, volunteering in Canada and even working on a cruise ships so that I could get paid to travel.',
            p2: 'I always focus on enjoying the simple things in life, such as an aimless wander around a new place, watching a beautiful sunset, people-watching and sharing a smile with anyone that crosses my path.',
            p3: 'As a Tour Manager at Wandering Earl Tours, I get excited every time someone books a trip, as I love to play a role in helping our guests achieve one of their travel goals!',
            name: 'Elizabeth Aceves',
            position: 'Tour Manager',
            Direction: 'flex-row-reverse',
        },
        {
            imgUrl: TeamMemberImg3,
            p1: 'Since I was a little kid, I had a deep connection with stories about adventurers. I heard about people that had gone to deserts with dunes taller than skyscrapers, to cities where people needed boats to go from one house to another, and of forests with trees as far as the eye can see.',
            p2: 'All of the decisions I made since then have been directed to travel, and so here I am, being a full-time digital nomad, traveling to all of the places I had once only heard of. I am now an adventurer of sorts, and I wouldn’t change it for anything. Now, I can not only achieve this dream for myself, but working with Wandering Earl Tours has helped me bring this dream to others, which I’m extremely happy about! ',
            name: 'Ivan Radchik',
            position: 'Tour Director',
            Direction: 'flex-row',
        },
        {
            imgUrl: TeamMemberImg4,
            p1: 'With over 20 years of travel experience and almost as many years of guiding around the world, I’m ALWAYS prepared for any kind of adventure, even on a minute’s notice. From Vietnam to Morocco, Jordan to Cambodia, Egypt to Indonesia and so many unbelievable destinations in between…just name a place and I’m ready to go!',
            p2: 'The way I see it – the more we travel, the deeper connection we have with our planet and all the cultures that exist, leading to more sustainable choices to ensure it all survives.',
            p3: 'I’ve been leading small group trips for Wandering Earl Tours for the past 7 years, in Morocco, Jordan, Egypt, India, SE Asia and more!',
            name: 'Sakai Naismith',
            position: 'Tour Leader',
            Direction: 'flex-row-reverse',
        },
        {
            imgUrl: TeamMemberImg5,
            p1: 'I first traveled overseas after graduating high school and I haven’t stopped!  I’ve traveled to 49 states and over 70 countries (I am still missing Ohio!). After working in restaurant and retail management for many years I decided it was time to fulfill my dream of traveling. I packed up all my belongings, sold my house and embarked on a 13+ month trip around the world. ',
            p2: 'After running into a tour group on a small island in southern Laos, I filed it away thinking that would be a great job. When I came back to the US, I then applied to be a tour leader. Six months later I was in Vietnam training for my dream job.',
            p3: 'This career has taken me to all corners of the globe and I now love working for Wandering Earl and sharing my passion for travel with everyone on these trips',
            name: 'Dara Leonard',
            position: 'Tour Leader',
            Direction: 'flex-row',
        },
        {
            imgUrl: TeamMemberImg6,
            p1: 'It is no secret to those who know me that I am the happiest while on the road! I studied tourism in college and I’ve worked for more than 12 years in the tourism industry, only to discover that tour leading is one of my favorite things to do!',
            p2: 'I seek adventure when I travel and I always find ways to get out of my comfort zone. I have lived in several cities across four continents, and I am not planning to stop discovering our beautiful world, learning about new cultures, speaking different languages and blending in with locals.',
            p3: 'I’ve lead tours in Africa, Europe, the Middle East and more, and I genuinely look forward to seeing happy faces while in the unique destinations we travel to on Wandering Earl tours!',
            name: 'Luna Rodriguez',
            position: 'Tour Leader',
            Direction: 'flex-row-reverse',
        },
        {
            imgUrl: TeamMemberImg7,
            p1: 'I am happiest when I’m outside and on an adventure! Travel is truly my greatest passion and when I’m not on a trip, I’m dreaming of the next one. From spending months backpacking through Europe and Southeast Asia to taking countless road trips around North America, I always try to find exciting ways to get off the beaten path and immerse myself in each destination.',
            p2: 'I believe unique and meaningful experiences are essential elements of any successful trip and work hard to ensure all guests leave our tours feeling the same.',
            p3: 'Some of my favorite things include photography, cycling, and spending time in nature. I’m also easily excited by anything related to food – especially spicy Thai meals and delicious local beers!',
            name: 'Stephanie Lange',
            position: 'Tour Leader',
            Direction: 'flex-row',
        },
    ]
    return (
        <>
            {/* Hero Section */}
            <div className='bg-Primary relative z-10'>
                <HeroSection
                    title={HeroSectionDetails.title}
                    paraText={HeroSectionDetails.paraText}
                    subText={HeroSectionDetails.subText}
                    ImgUrl={HeroSectionDetails.ImgUrl}
                />
            </div>

            {/* Gradient continuation after hero image */}
            <div
                className="w-full h-[80px] md:h-[120px] 2xl:[150px]" // Adjust height as needed
                style={{
                    background:
                        "linear-gradient(0deg, rgba(30, 54, 92, 0) 0%, #1E365C 100%)",
                }}
            ></div>



            <div className='container mx-auto px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[100px] mb-[32px] md:mb-[48px] lg:mb-[80px] xl:mb-[112px] 2xl:mb-[140px] relative flex flex-col gap-10 md:gap-15 lg:gap-20 pt-[16px] md:pt-[32px] lg:pt-[56px] xl:pt-[72px] 2xl:pt-[95px]'>

                {/* After hero section */}
                <div className='flex flex-col items-center lg:flex-row gap-10'>
                    {/* text content */}
                    <div className='w-full lg:w-1/2 text-Black space-y-5 p-5'>
                        <Paragraph size="subText">
                            Our team at Wandering Earl Tours has a strong desire to bring rich cultural connections around the world to people who would appreciate them the most. And we hold this mission at the core of everything we do
                        </Paragraph>

                        <Paragraph size="subText">
                            Focused, purposeful and incredibly rewarding trips are the goal, and each member of our team brings their own insights, skills and enthusiasm to the table. When combined, our goal is achieved, with unique Wandering Earl Tours that we are all genuinely excited to offer!
                        </Paragraph>

                    </div>
                    {/* Image Block */}
                    <div className='w-full lg:w-1/2'>
                        <div className="relative mx-auto w-full max-w-[762px] max-h-[573px] h-full mb-40 sm:mb-40 md:mb-60 lg:mb-50">
                            {/* First Image */}
                            <div className="relative top-2 max-w-[200px] sm:max-w-[267px] md:max-w-[267px] lg:max-w-[210px] xl:max-w-[267px] 2xl:max-w-[317px]">
                                <Image
                                    src={AboutUsDes1}
                                    alt="friends"
                                    className="object-cover aspect-[3/4] rounded-[2rem]"
                                />
                            </div>

                            {/* Second Image */}
                            <div className="z-20 absolute top-10 left-52 max-w-[220px] sm:top-10 sm:left-[18.5rem] sm:max-w-[244px] md:top-10 md:left-96 md:max-w-[259px] lg:top-10 lg:left-60 lg:max-w-[219px] xl:top-10 xl:left-[21.5rem] xl:max-w-[259px] 2xl:top-10 2xl:left-[26.5rem] 2xl:max-w-[309px]">
                                <Image
                                    src={AboutUsDes2}
                                    alt="castle"
                                    className="object-cover rounded-[2rem] border-[12px] border-white shadow-[-21px_27px_36px_-1px_rgba(0,0,0,0.55)]"
                                />
                            </div>

                            {/* Third Image */}
                            <div className="z-10 absolute top-[7.5rem] left-20 max-w-[350px] sm:top-[10rem] sm:left-[8.5rem] sm:max-w-[490px] md:top-[10rem] md:left-[8.5rem] md:max-w-[524px] lg:top-[10rem] lg:left-24 lg:max-w-[484px] xl:top-[10rem] xl:left-[8.5rem] xl:max-w-[524px] 2xl:top-[12.5rem] 2xl:left-[11rem] 2xl:max-w-[574px]">
                                <Image
                                    src={AboutUsDes3}
                                    alt="van girl"
                                    className="object-cover rounded-[2rem] border-[12px] border-white shadow-xl"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Our Global Family */}
            <div className='flex flex-col lg:flex-row items-center gap-1 bg-Secondary w-full'>
                <div className='container mx-auto flex flex-col lg:flex-row w-full'>
                    <div className='w-full flex flex-col gap-[8px] xl:gap-[11px] 2xl:gap-[40px] lg:w-1/2 px-5 py-5 md:px-8 md:py-10 lg:px-10 lg:py-15'>
                        <Heading level="h1" className="text-White font-extrabold">
                            Our global family
                        </Heading>

                        <Paragraph size="normal" className="text-White mt-2 mb-4">
                            Our team also consists of our incredible travel partners, friends and endless local contacts in every country where we operate. These wonderful people work extremely hard to help us create and run our unique trips. We could not do this without all of them as it takes such a dedicated and global team to create our rewarding travel experiences!
                        </Paragraph>

                        <div>
                            <Button variant="default" size="lg">
                                <Paragraph size="normal" className="font-semibold">
                                    Contact us Today
                                </Paragraph>
                            </Button>

                        </div>
                    </div>

                    <div className='flex w-full lg:w-1/2 flex-grow'>
                        <Image
                            src={OurGlobalFamliyAboutUs}
                            alt='Our Global Famliy AboutUs'
                            className='w-full h-full object-cover rounded-tl-[1821px] rounded-bl-[795px]'
                        />
                    </div>

                </div>
            </div>
            <div className='container mx-auto flex flex-col gap-[90px] md:gap-[100px] lg:gap-[120px] xl:gap-[135px] 2xl:gap-[150px] pt-[80px] md:pt-[100px] lg:pt-[115px] xl:pt-[125px] 2xl:pt-[140px] pb-[90px] md:pb-[110px] lg:pb-[125px] xl:pb-[140px] 2xl:pb-[150px] px-[32px] md:px-[48px] lg:px-[64px] xl:px-[80px] 2xl:px-[100px]'>
                {/* Our Team */}
                <div className='flex flex-col'>
                    <div className='text-Black font-[900] text-center mb-[40px] md:mb-[60px] lg:mb-[75px] xl:mb-[90px] 2xl:mb-[100px]'>
                        <Heading level="h1" className="text-center">
                            Our <span className="text-Secondary">Team</span>
                        </Heading>

                    </div>
                    <div>
                        {ourTeam.map((member, index) => (
                            <OurTeam
                                key={index}
                                imgUrl={member.imgUrl}
                                p1={member.p1}
                                p2={member.p2}
                                p3={member.p3}
                                p4={member.p4}
                                name={member.name}
                                position={member.position}
                                Direction={member.Direction}
                            />
                        ))}
                    </div>
                </div>

                {/* TOURS LARGE */}
                <div>
                    <AllToursLarge title="Tours" />
                </div>

            </div>

        </>
    )
}

export default AboutUs
