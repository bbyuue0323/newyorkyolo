import ScrollReveal from '../../../components/base/ScrollReveal';

interface NextEventProps {
  sectionNumber?: string;
  femaleTicketUrl?: string;
  maleTicketUrl?: string;
  eventName?: string;
  eventDate?: string;
  eventDay?: string;
  eventTime?: string;
  eventVenue?: string;
  eventTicket?: string;
  eventNote?: string;
  eventImage?: string;
}

export default function NextEvent({
  sectionNumber = '04',
  femaleTicketUrl,
  maleTicketUrl,
  eventName = 'Summer Sunset 2024',
  eventDate = '2024.07.20',
  eventDay = 'Saturday',
  eventTime = '18:00 - 24:00',
  eventVenue = 'Rooftop Lounge / Manhattan',
  eventTicket = '$50 - $150',
  eventNote,
  eventImage,
}: NextEventProps) {
  return (
    <section id="next-event" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16">
            <div className="flex items-start gap-8 mb-8">
              <p className="text-6xl font-light text-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>{sectionNumber}</p>
              <div>
                <h3 className="text-xs tracking-widest text-gray-400 mb-3">NEXT EVENT</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-px bg-[#B11226]"></div>
                  <h2 className="text-2xl font-light text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>NEXT開催</h2>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right" delay={100}>
            <div className="relative">
              <img
                src={eventImage ?? "https://readdy.ai/api/search-image?query=Rooftop%20lounge%20Manhattan%20summer%20sunset%20event%20elegant%20outdoor%20party%20New%20York%20skyline%20golden%20hour%20warm%20lighting%20sophisticated%20guests%20cocktails%20luxury%20atmosphere&width=800&height=500&seq=next-event-01&orientation=landscape"}
                alt="Next Event"
                className="w-full h-[500px] object-cover object-center rounded-lg"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={200}>
            <div className="space-y-8">
              <div>
                <p className="text-xs text-gray-400 mb-2">EVENT NAME</p>
                <h3 className="text-2xl font-light text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>{eventName}</h3>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">DATE</p>
                <p className="text-4xl font-light text-[#111111]" style={{ fontFamily: "'Playfair Display', serif" }}>{eventDate}</p>
                <p className="text-lg text-gray-500">{eventDay}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">TIME</p>
                <p className="text-lg text-[#111111]">{eventTime}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">VENUE</p>
                <p className="text-lg text-[#111111]">{eventVenue}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-2">TICKET</p>
                <p className="text-lg text-[#111111]">{eventTicket}</p>
                {eventNote && <p className="text-sm text-gray-500 mt-1">{eventNote}</p>}
              </div>

              {femaleTicketUrl && maleTicketUrl ? (
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={femaleTicketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#B11226] hover:bg-[#8B0E1D] text-white px-6 py-4 text-sm transition-colors whitespace-nowrap cursor-pointer rounded-lg"
                  >
                    チケット購入はこちら（女性用）
                  </a>
                  <a
                    href={maleTicketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#111111] hover:bg-[#B11226] text-white px-6 py-4 text-sm transition-colors whitespace-nowrap cursor-pointer rounded-lg"
                  >
                    チケット購入はこちら（男性用）
                  </a>
                </div>
              ) : (
                <a
                  href="#"
                  className="inline-block bg-[#111111] hover:bg-[#B11226] text-white px-8 py-4 text-sm transition-colors whitespace-nowrap cursor-pointer rounded-lg"
                >
                  チケット購入はこちら
                </a>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
