<?php

namespace App\Validator;

use App\DTO\RegistrationDTO;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class RegistrationValidator
{
    public function __construct(
        private ValidatorInterface $validator
    ) {}

    public function validate(RegistrationDTO $dto): array
    {
        $constraints = new Assert\Collection([
            'parentLastName' => [new Assert\NotBlank(), new Assert\Length(['max' => 255])],
            'parentFirstName' => [new Assert\NotBlank(), new Assert\Length(['max' => 255])],
            'email' => [new Assert\NotBlank(), new Assert\Email()],
            'phone' => [new Assert\NotBlank(), new Assert\Regex(['pattern' => '/^\+?[0-9\s-]+$/']), new Assert\Length(['max' => 20])],
            'childLastName' => [new Assert\NotBlank(), new Assert\Length(['max' => 255])],
            'childFirstName' => [new Assert\NotBlank(), new Assert\Length(['max' => 255])],
            'birthDate' => [new Assert\NotBlank(), new Assert\Date()],
            'startDate' => [new Assert\NotBlank(), new Assert\Date()],
            'comments' => [new Assert\Optional([new Assert\Length(['max' => 1000])])]
        ]);

        $violations = $this->validator->validate([
            'parentLastName' => $dto->parentLastName,
            'parentFirstName' => $dto->parentFirstName,
            'email' => $dto->email,
            'phone' => $dto->phone,
            'childLastName' => $dto->childLastName,
            'childFirstName' => $dto->childFirstName,
            'birthDate' => $dto->birthDate,
            'startDate' => $dto->startDate,
            'comments' => $dto->comments,
        ], $constraints);

        if (count($violations) > 0) {
            $errors = [];
            foreach ($violations as $violation) {
                $errors[$violation->getPropertyPath()] = $violation->getMessage();
            }
            return $errors;
        }

        return [];
    }
}