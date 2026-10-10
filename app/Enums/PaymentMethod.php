<?php

namespace App\Enums;

enum PaymentMethod: string
{
    case Cash = 'cash';
    case CreditCard = 'credit_card';
    case BankTransfer = 'bank_transfer';
    case Insurance = 'insurance';
    case MobileMoney = 'mobile_money';

    public function label(): string
    {
        return match ($this) {
            self::Cash => 'Espèces',
            self::CreditCard => 'Carte bancaire',
            self::BankTransfer => 'Virement',
            self::Insurance => 'Assurance',
            self::MobileMoney => 'Mobile money',
        };
    }
}
