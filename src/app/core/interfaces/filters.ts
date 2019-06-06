export interface FiltersAutoComplete {
    label: string;
    value: string;
    icon?: string;
    type: string;
}

export enum TypeOfFilter {
    CATEGORY = 'category',
    COUNTRY = 'country'
}

export const ValuesForFilters: FiltersAutoComplete[] = [
    { label: 'Business', value: 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx6TVdZU0FtVnVHZ0pWVXlnQVAB', type: TypeOfFilter.CATEGORY, icon: '' },
    { label: 'Technology', value: 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRGRqTVhZU0FtVnVHZ0pWVXlnQVAB', type: TypeOfFilter.CATEGORY, icon: '' },
    { label: 'Entertainment', value: 'CAAqJggKIiBDQkFTRWdvSUwyMHZNREpxYW5RU0FtVnVHZ0pWVXlnQVAB', type: TypeOfFilter.CATEGORY, icon: '' },
    { label: 'Sports', value: 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp1ZEdvU0FtVnVHZ0pWVXlnQVAB', type: TypeOfFilter.CATEGORY, icon: '' },
    { label: 'Science', value: 'CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp0Y1RjU0FtVnVHZ0pWVXlnQVAB', type: TypeOfFilter.CATEGORY, icon: '' },
    { label: 'Health', value: 'CAAqIQgKIhtDQkFTRGdvSUwyMHZNR3QwTlRFU0FtVnVLQUFQAQ', type: TypeOfFilter.CATEGORY, icon: '' },
    { label: 'Israel', value: 'israel', type: TypeOfFilter.COUNTRY },
    { label: 'United States', value: 'usa', type: TypeOfFilter.COUNTRY },
    { label: 'Australia', value: 'australia', type: TypeOfFilter.COUNTRY },
    { label: 'France', value: 'france', type: TypeOfFilter.COUNTRY },
    { label: 'Argentina', value: 'argentina', type: TypeOfFilter.COUNTRY },
    { label: 'Germany', value: 'Germany', type: TypeOfFilter.COUNTRY },
    { label: 'Spain', value: 'Spain', type: TypeOfFilter.COUNTRY },
    { label: 'United Kingdom', value: 'uk', type: TypeOfFilter.COUNTRY }
];
