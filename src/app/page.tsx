"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitStacked from '@/components/sections/hero/HeroSplitStacked';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Home, Star, Building2, Award, MapPin, Palette, Leaf, Heart, Tag } from "lucide-react";

export default function LandingPage() {
  const handleRoomClick = (roomId: string) => {
    alert(`Opening booking modal for room ${roomId}`);
  };

  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Serenity Hotel"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Book Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitStacked
          title="Experience Luxury & Comfort"
          description="Discover our world-class hotel with stunning views, premium amenities, and exceptional service designed for the perfect getaway."
          tag="Welcome to Paradise"
          tagIcon={Sparkles}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890399465-9w8c2c7x.jpg", imageAlt: "Hotel lobby" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890400213-zyb4n9h2.jpg", imageAlt: "Hotel room" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890400734-3h3c85jd.jpg", imageAlt: "Suite interior" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890401465-mosqu6nn.jpg", imageAlt: "Pool resort" }
          ]}
          stackedVariant="card"
          imagePosition="right"
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Our Room Collection"
          description="Choose from our carefully curated selection of rooms and suites, each designed to provide maximum comfort and style."
          tag="Premium Accommodations"
          tagIcon={Home}
          products={[
            { id: "1", name: "Deluxe Room", price: "from $199/night", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890402787-2y9sxqrz.jpg", imageAlt: "Deluxe room", onProductClick: () => handleRoomClick("1") },
            { id: "2", name: "Ocean View Suite", price: "from $299/night", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890400213-zyb4n9h2.jpg", imageAlt: "Ocean view suite", onProductClick: () => handleRoomClick("2") },
            { id: "3", name: "Presidential Suite", price: "from $599/night", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890400734-3h3c85jd.jpg", imageAlt: "Presidential suite", onProductClick: () => handleRoomClick("3") }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Enjoy our extensive range of premium facilities and services designed to enhance your stay."
          tag="Facilities & Services"
          tagIcon={Star}
          features={[
            {
              title: "Spa & Wellness",
              description: "Relax and rejuvenate with our full-service spa, sauna, and wellness center featuring expert therapists.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890402244-xe88jroa.jpg",
              button: { text: "Learn More", href: "#" }
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor world-class cuisine prepared by our award-winning chefs in an elegant atmosphere.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890403585-tadetujj.jpg",
              button: { text: "Reserve Table", href: "contact" }
            },
            {
              title: "Fitness Center",
              description: "Stay active with state-of-the-art equipment, personal training services, and yoga classes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890404434-6ru59qez.jpg",
              button: { text: "View Details", href: "#" }
            }
          ]
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Serenity Hotel"
          description="For over 25 years, we have been providing exceptional hospitality experiences to guests from around the world. Our commitment to excellence is reflected in every aspect of our hotel."
          tag="Our Story"
          tagIcon={Building2}
          bulletPoints={[
            {
              title: "Award-Winning Service",
              description: "Recognized globally for outstanding guest care and attention to detail",
              icon: Award
            },
            {
              title: "Prime Location",
              description: "Perfectly situated in the heart of the city with easy access to attractions",
              icon: MapPin
            },
            {
              title: "Luxury Design",
              description: "Contemporary architecture combined with timeless elegance throughout the property",
              icon: Palette
            },
            {
              title: "Sustainable Practices",
              description: "Committed to environmental responsibility and ethical operations",
              icon: Leaf
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890410711-p5wdf029.jpg"
          imagePosition="right"
          textboxLayout="default"
          buttons={[{ text: "Read Our History", href: "#" }]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="Guest Reviews"
          description="Hear what our valued guests have to say about their stays at Serenity Hotel."
          tag="Guest Stories"
          tagIcon={Heart}
          textboxLayout="default"
          testimonials={[
            { id: "1", name: "Sarah Mitchell", role: "Travel Blogger", company: "Wanderlust Chronicles", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890405133-pgjp0ntm.jpg" },
            { id: "2", name: "James Chen", role: "Business Executive", company: "Global Tech Corp", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890405870-8c4mjym9.jpg" },
            { id: "3", name: "Maria Rodriguez", role: "Vacation Planner", company: "Dream Destinations", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890406535-krcwgfaa.jpg" },
            { id: "4", name: "Emma Thompson", role: "Honeymooner", company: "Just Married", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763890407636-2lfkkfal.jpg" }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Room Packages"
          description="Select the perfect package for your stay with our flexible pricing options."
          tag="Seasonal Rates"
          tagIcon={Tag}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "basic",
              badge: "Standard",
              price: "$199",
              subtitle: "per night",
              features: ["King-size bed", "Free Wi-Fi", "Daily housekeeping", "Continental breakfast"]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$299",
              subtitle: "per night",
              features: ["Suite accommodation", "Ocean view", "Free Wi-Fi", "24-hour room service", "Spa access", "Fine dining credit"]
            },
            {
              id: "luxury",
              badge: "Exclusive",
              price: "$599",
              subtitle: "per night",
              features: ["Presidential Suite", "Panoramic views", "Private butler service", "Michelin dining", "Spa privileges", "Airport transport"]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about bookings, amenities, and policies."
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your cancellation policy?",
              content: "We offer free cancellation up to 7 days before arrival. Cancellations within 7 days will incur a one-night charge. For more details, please contact our reservations team."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport pickup for guests staying 3 or more nights. Premium suites include this service automatically. Arrange with concierge upon booking."
            },
            {
              id: "3",
              title: "Are pets allowed?",
              content: "We welcome well-behaved pets in select rooms for a additional fee of $50 per night. Please notify us at booking. Service animals stay free."
            },
            {
              id: "4",
              title: "What amenities are included with my room?",
              content: "All rooms include Wi-Fi, premium toiletries, 24-hour room service, and fitness center access. Suites additionally include spa credits and dining vouchers."
            },
            {
              id: "5",
              title: "Is parking available?",
              content: "Complimentary valet parking is available for all guests. Self-parking is also offered in our secure underground garage at no charge."
            },
            {
              id: "6",
              title: "Do you accommodate group bookings?",
              content: "Yes! We offer special rates for groups of 10 or more. Contact our group sales team for customized packages and event planning services."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Book Your Perfect Stay"
          description="Reserve your room today and experience luxury hospitality. Our team will confirm your booking within 24 hours."
          inputs={[
            { name: "fullName", type: "text", placeholder: "Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "checkIn", type: "date", placeholder: "Check-in Date", required: true },
            { name: "checkOut", type: "date", placeholder: "Check-out Date", required: true }
          ]}
          textarea={{ name: "specialRequests", placeholder: "Special requests or preferences...", rows: 4, required: false }}
          buttonText="Reserve Now"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Serenity Hotel"
          columns={[
            {
              items: [
                { label: "Rooms", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Pricing", href: "pricing" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Accessibility", href: "#" }
              ]
            },
            {
              items: [
                { label: "Instagram", href: "#" },
                { label: "Facebook", href: "#" },
                { label: "Twitter", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}