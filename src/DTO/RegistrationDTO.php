<?php

namespace App\DTO;

class RegistrationDTO
{
    public function __construct(
        public readonly string $parentLastName,
        public readonly string $parentFirstName,
        public readonly string $email,
        public readonly string $phone,
        public readonly string $childLastName,
        public readonly string $childFirstName,
        public readonly string $birthDate,
        public readonly string $startDate,
        public readonly ?string $comments = null
    ) {}

    public static function fromArray(array $data): self
    {
        return new self(
            parentLastName: $data['parentLastName'],
            parentFirstName: $data['parentFirstName'],
            email: $data['email'],
            phone: $data['phone'],
            childLastName: $data['childLastName'],
            childFirstName: $data['childFirstName'],
            birthDate: $data['birthDate'],
            startDate: $data['startDate'],
            comments: $data['comments'] ?? null
        );
    }
}