terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-east-1"
    access_key = "AKIAZQ3DQZ27EAHGLK22"
  secret_key = "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"
}