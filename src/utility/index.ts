import { displayTimeType } from './../types'
export function isEternalUrl(url: string): boolean {
  return (
    url.startsWith("https") || url.startsWith("https") || url.startsWith("www")
  );
}
export function getBlopUrlFromFile(file: File): string {
  return URL.createObjectURL(file);
}
export function getDate(date: string): any {
    return new Date(date)
}

export function displayTime(type: displayTimeType, hours: number): string {
  if (type === "remaining") {
    if (hours < 1) {
      return `moins d'1h restante`;
    } else if (hours === 1) {
      return `1h restante`;
    } else if (hours > 1) {
      return `${hours}h restantes`;
    } else if (hours > 48) {
      return `${Math.ceil(hours / 24)}j restants`;
    }
  } else if (type === "completed") {
    if (hours < 1) {
      return `depuis moins d'1h`;
    } else if (hours === 1) {
      return `depuis 1h`;
    } else if (hours > 1) {
      return `depuis ${hours}h`;
    } else if (hours > 48) {
      return `depuis ${Math.ceil(hours / 24)}j`;
    }
  } else if (type === "incoming") {
    if (hours < 1) {
      return `dans moins d'1h`;
    } else if (hours === 1) {
      return `dans 1h`;
    } else if (hours > 1) {
      return `dans ${hours}h`;
    } else if (hours > 48) {
      return `dans ${Math.ceil(hours / 24)}j`;
    }
  }
  throw new Error()
}

export function checkReservationState(reservation, todaysDate: number): displayTimeType {
    // diff en seconde
    const diff = (todaysDate - getDate(reservation.date_start)) / 1000

    // à venir
    if(diff < 0) return 'incoming'
    // terminées
    if(diff - (reservation.duration * 86400) > 0) return 'completed'
    // en cours
    return 'remaining'
}

export const makeCaseAndAccentInsensitiveString = (param) => {
  return param.toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
}

export const formatSqlToJsDate = (sqlDate: string) => {
  //sqlDate in SQL DATETIME format ("yyyy-mm-dd hh:mm:ss.ms")
  const sqlAllDate = sqlDate.split("-")
  const sYear = Number(sqlAllDate[0])
  const sMonth = Number(sqlAllDate[1])
  const sqlDayAndHour = sqlAllDate[2].split("T")
  const sDay = Number(sqlDayAndHour[0])

  return new Date(sYear,sMonth,sDay)
}
