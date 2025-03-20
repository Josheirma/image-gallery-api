#!/bin/bash

# Ensure the script stops if any command fails
set -e

# Prompt for the feature branch name
echo "Enter the feature branch name:"
read feature_branch

if [ -z "$feature_branch" ]; then
  echo "Feature branch name cannot be empty. Exiting."
  exit 1
fi

echo "Switching to main branch..."
git checkout main

echo "Pulling latest changes from main..."
git pull origin main

echo "Rebasing $feature_branch onto main..."
git rebase "$feature_branch"

# Check for conflicts
while [ $? -ne 0 ]; do
  echo "Conflicts detected during rebase! Please resolve the conflicts manually."
  echo "Once resolved, use 'git add <file>' to stage the resolved files."

  # Wait for user input to continue the rebase after resolving conflicts
  echo "Press Enter to continue once conflicts are resolved and files are staged."
  read

  # Check if conflicts are resolved and files are staged
  git status
  echo "Continuing the rebase..."
  
  # Continue the rebase
  git rebase --continue
done

echo "Force-pushing the rebased changes..."
git push -f

echo "Checking git status..."
git status
