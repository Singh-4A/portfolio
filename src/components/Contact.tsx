import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { clientApi } from "@/api/clientApi";
import { useState } from "react";
import { useSnackbar } from "notistack";


interface valueType {
  name: string,
  email: string,
  message: string,
  subject: string
}

const Contact = () => {



  const [clientValue, setClientValue] = useState<valueType>({
    name: "",
    message: "",
    subject: "",
    email: ""

  })

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "singh1code@gmail.com",
      link: "mailto:singh1code@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9720343752",
      link: "tel:+9720343752"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Delhi, NCR",
      link: "#"
    }
  ];




  function onChangeHandler(e: any) {
    const { value, name } = e.target
    setClientValue((prev: valueType) => {
      return {
        ...prev,
        [name]: value
      }
    })

  }

  const submitClientData = async (e: any) => {
    e.preventDefault()

    if (clientValue?.email && clientValue?.name && clientValue?.subject && clientValue?.message) {
      const response = await clientApi(clientValue)
      if (response.status === 200) {
        setClientValue({
          name: "",
          message: "",
          subject: "",
          email: ""
        })

        enqueueSnackbar('Thanks for connecting us!', { variant: 'success' });


      } else {
        enqueueSnackbar('Something went wrong!', { variant: 'error' });

      }
    } else {
      enqueueSnackbar('please fill the form!', { variant: 'error' });

    }
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-accent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </div>


        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting projects.
                Feel free to reach out if you'd like to work together or just want to chat!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a href={info.link} className="flex items-center space-x-4 group">
                    <div className="p-3 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform duration-200">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={clientValue.name}
                    name="name"
                    placeholder="Your Name"
                    className="transition-all duration-200 focus:scale-105"
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    value={clientValue.email}
                    name="email"
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="transition-all duration-200 focus:scale-105"
                    onChange={onChangeHandler}

                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  value={clientValue.subject}
                  name="subject"
                  id="subject"
                  placeholder="Project Discussion"
                  className="transition-all duration-200 focus:scale-105"
                  onChange={onChangeHandler}

                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  value={clientValue.message}

                  name="message"
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="transition-all duration-200 focus:scale-105"
                  onChange={onChangeHandler}

                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group"
                onClick={(e) => submitClientData(e)}
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>

            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;