export function createVisitor(name, age, ticketId)
  {
    let obj = {
      name: name,
      age: age,
      ticketId, ticketId
    };

    return obj;
  }

export function revokeTicket(visitor)
  {
    visitor.ticketId = null;

    return(visitor);
  }

export function ticketStatus(tickets, ticket)
  {
    if(tickets[ticket])
    {
      return `sold to ${tickets[ticket]}`;
    }
    else if(tickets.ticket == null && tickets.hasOwnProperty(ticket))
    {
      return ('not sold')
    }
    else{
      return ('unknown ticket id')
    }
  }

export function simpleTicketStatus(tickets, ticket)
  {
     return tickets[ticket] ?? "invalid ticket !!!"
  }

export function gtcVersion(visitorNew)
  {
      return visitorNew?.gtc?.version
  }