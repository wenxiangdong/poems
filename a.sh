#!/bin/bash
for i in {2..64}
do
  gh issue delete $i --yes
done